from .reddit_object import *

#Selection options: best, controversial, gilded, hot, new, rising, random_rising, top
#Only top and controversial can be sorted by time
#time = "all", "day", "hour", "month", "week", or "year".
def frontPagePosts(re_token, selection="hot", limit_given=15, time="week"):
    reddit = authorizedPraw(re_token)
    listOfPosts = []

    if (selection == "best"):
        for post in reddit.front.best(limit=limit_given):
            listOfPosts.append({"title" : post.title, "body" : post.selftext})
        return listOfPosts

    elif (selection == "controversial"):
        for post in reddit.front.controversial(limit=limit_given, time_filter=time):
            listOfPosts.append({"title" : post.title, "body" : post.selftext})
        return listOfPosts

    elif (selection == "gilded"):
        for post in reddit.front.gilded(limit=limit_given):
            listOfPosts.append({"title" : post.title, "body" : post.selftext})
        return listOfPosts

    elif (selection == "hot"):
        for post in reddit.front.hot(limit=limit_given):
            listOfPosts.append({"title" : post.title, "body" : post.selftext})
        return listOfPosts

    elif (selection == "new"):
        for post in reddit.front.new(limit=limit_given):
            listOfPosts.append({"title" : post.title, "body" : post.selftext})
        return listOfPosts
    
    elif (selection == "rising"):
        for post in reddit.front.rising(limit=limit_given):
            listOfPosts.append({"title" : post.title, "body" : post.selftext})
        return listOfPosts

    elif (selection == "random_rising"):
        for post in reddit.front.random_rising(limit=limit_given):
            listOfPosts.append({"title" : post.title, "body" : post.selftext})
        return listOfPosts
    
    elif (selection == "top"):
        for post in reddit.front.top(limit=limit_given, time_filter=time):
            listOfPosts.append({"title" : post.title, "body" : post.selftext})
        return listOfPosts