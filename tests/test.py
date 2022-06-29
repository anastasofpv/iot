import datetime
import time
import random
import pymongo
import requests


N = 10


url = "http://localhost:3000/api/map"
for i in range(N):
    droneID = random.randrange(0,3)
    temperature = random.randrange(16,30)
    if (droneID == 0):
        point = [random.randrange(37,40),random.randrange(19,22)]
    elif (droneID == 1):
        point = [random.randrange(27,30),random.randrange(19,22)]
    elif (droneID == 2):
        point = [random.randrange(17,20),random.randrange(19,22)]

    mydict = {
        "droneID": droneID,
        "temperature": temperature,
        # "timeCreated": datetime.datetime.now(),
        "point": point
    }

    x = requests.post(url,json=mydict)
    # print(mydict)
    # print("document inserted")
    time.sleep(3)



time.sleep(5)


myclient = pymongo.MongoClient("localhost", 27017, username="admin", password="drone-db")
mydb = myclient["droneDB"]
mycol = mydb["droneData"]

counter = 0
for x in mycol.find():
    # print(x)
    counter += 1

if counter == N+1:
    print("Tests passed successfully")
    time.sleep(2)
    exit(0)
else: 
    print("Test FAILED ...")
    time.sleep(2)
    exit(1)

    
    
    
