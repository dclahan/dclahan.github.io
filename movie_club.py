import requests
from bs4 import BeautifulSoup
import random
import sys
import os
# os.system('cls')
import time 
# time.sleep(0.300)
from tqdm import tqdm
import matplotlib.pyplot as plt
import pickle

def pretty_print(m1,m2,week,movies):
	i = len(movies)
	k = 0
	while i > 2:
		# time.sleep(0.01)
		os.system('cls')
		print(f"\n\t\t WEEK {week} MOVIES:")
		random.shuffle(movies)
		for j in range(i):
			print("\t\t",movies[j])
		if k%3 == 0:
			i -= 1
		k+=1
	
	os.system('cls')
	print(f"\n\t\tWEEK {week} MOVIES:")
	print("\t\t", m1)
	print("\t\t", m2)

def get_new_movies_biased(movies, week, prt = True):
	unseen = [movie for movie in movies if movie.week == 0]
	people = []
	tmp = set()
	# find each induviduals movies that remain unwatched
	for i in range(1,len(movies)+6,5):
		tmp = tmp | set([movie for movie in unseen if movie.index < i])
		people.append(tmp.copy())
	for i in range(len(people)-1,0,-1):
		people[i] = people[i] - people[i-1]
	people = [pers for pers in people if len(pers) > 0]

	# stats = 0
	# for pers in people:
	# 	print('Person:')
	# 	for mov in pers:
	# 		print(mov,end = '\t')
	# 		stat = 1/(len(pers)*len(people)) * len(unseen)/len(pers)
	# 		print(stat)
	# 		stats += stat
	# print(stats)
	# print(1/len(unseen))


	# random choice from each persons unwatched "bin" 
	everyones_mov = []
	for person in people:
		everyones_mov.append(random.choice(list(person)))

	# print("random movie for everyone:")
	# for mov in everyones_mov:
	# 	print(mov)

	# shuffle order, first 2 are randomly selected separate persons movie
	random.shuffle(everyones_mov)
	m1, m2 = everyones_mov[0:2]
	if prt:
		print()
		print("\t\tWEEK {} MOVIES:".format(week))
		print("\t\t",m1)
		print("\t\t",m2)
		print()
	return m1,m2

def get_new_movies(movies, week, prt = True):
	unseen = [movie for movie in movies if movie.week == 0] #and movie.index < 41
	m1 = random.choice(unseen)
	low = m1.index - m1.index % 5 + 1
	high = low+5
	# print(range(low,high))
	rest = [movie for movie in unseen if movie.index not in range(low,high)]
	# for movie in rest:
	# 	print(movie)
	m2 = random.choice(rest)
	if prt:
		print()
		print("\t\tWEEK {} MOVIES:".format(week))
		print("\t\t",m1)
		print("\t\t",m2)
		print()
	return m1,m2

class Movie:
	def __init__(self, index:int, name : str, link : str, week = 0, year = 0, poster = ''):
		self.title = name
		self.link = "https://letterboxd.com/" + link
		self.week = week
		self.index = index
		self.year = year
		self.poster = poster

	def __str__(self):
		return "{0}:\t {1} {2}".format(self.index,self.title.ljust(50), self.week if self.week > 0 else "")

def initialize(weeks):
	r = requests.get('https://boxd.it/fcoku')
	print(r)

	soup = BeautifulSoup(r.content,'html.parser')

	s = soup.find('div', class_="site-body")

	movielist = s.find('ul', class_="js-list-entries poster-list -p125 -grid film-list")#poster-list -p125 -grid film-list
	content = movielist.find_all('li')
	movies = []

	for line in content:
		num = int(line.text.strip())
		week = 0
		for i in range(len(weeks)):
			if num in weeks[i]:
				week = i+1
		img = line.find('img', class_="image")
		name = img['alt']
		poster = img['src']
		div = line.find('div')
		url = div['data-target-link']
		movies.append(Movie(num, name, url, week = week, poster=poster))
	with open("save_vars.pickle", "wb") as f:
	    f.write(pickle.dumps(movies))
	return movies

if __name__ == "__main__":

	INITIT = 1 #0 for pickle 1 for soup
	weeks = [(20,13),(2,21),(7,15),(32,12),(25,17),(38,23),(34,16),(14,27),(41,8),(6,40),(42,19)] #update weekly
	curr_week = len(weeks) + 1
	# 	when updates to list are made or weeks ^ updates - run initialize
	if INITIT:
		movies = initialize(weeks)
	# 	otherwise, load same from pickle
	else:
		with open("save_vars.pickle", "rb") as f:
		    movies = pickle.load(f)

	if len(sys.argv) == 1:
		m1, m2 = get_new_movies(movies,curr_week, False)
		pretty_print(m1,m2,curr_week,[movie for movie in movies if movie.week == 0])
	else:
		command = sys.argv[1]
		if command == "LIST":
			for movie in movies:
				print(movie)
		elif command == 'CURR':
			this_weeks_movies = [movie for movie in movies if movie.week == len(weeks)]
			print("\nTHIS WEEKS MOVIES:")
			for m in this_weeks_movies:
				print(m)
			print()
		elif command == "UNSEEN":
			unseen = [movie for movie in movies if movie.week == 0]
			for movie in unseen:
				print(movie)
		elif command == "SEEN":
			seen = [movie for movie in movies if movie.week > 0]
			seen.sort(key = lambda x: x.week)
			for mov in seen:
				print(mov)
		elif command == "SIMU":
			selections = dict([(movie,0) for movie in movies if movie.week == 0])
			r = 100000
			for i in tqdm(range(r)):
				m1,m2 = get_new_movies(movies,curr_week, False)
				selections[m1] += 1
				selections[m2] += 1
			for item in selections.items():
				print(item[0], abs(item[1]/(2*r) - 1/len(selections.keys())))
			x = [item[0].index for item in selections.items()]
			y = [abs(item[1]/(2*r) - 1/len(selections.keys())) for item in selections.items()]
			plt.plot(x,y)
			plt.show()
		else:
			print('bleh')

