import datetime
import time
import random
import pymongo
import requests


N = 10
url = "http://localhost:3000/api/map"


def test_post_api(N, url):

    try:
        for i in range(N):
            droneID = random.randrange(0, 3)
            temperature = random.randrange(16, 30)
            if (droneID == 0):
                point = [random.randrange(37, 40), random.randrange(19, 22)]
            elif (droneID == 1):
                point = [random.randrange(27, 30), random.randrange(19, 22)]
            elif (droneID == 2):
                point = [random.randrange(17, 20), random.randrange(19, 22)]

            mydict = {
                "droneID": droneID,
                "temperature": temperature,
                # "timeCreated": datetime.datetime.now(),
                "point": point
            }

            x = requests.post(url, json=mydict)
            # print(mydict)
            # print("document inserted")
            time.sleep(3)
            
            

    except Exception as e:
        print("Post Request test FAILED ...   Exiting program")
        print(e)
        exit(1)
        


def test_database():

    try:
        myclient = pymongo.MongoClient("localhost", 27017, username="admin", password="drone-db")

        mydb = myclient["droneDB"]
        mycol = mydb["droneData"]

        counter = 0
        for x in mycol.find():
            # print(x)
            counter += 1
        
        return counter

    except Exception as e:
        print("Database test FAILED ...   Exiting program")
        print(e)
        exit(1)



def compare_results(N, counter):
    if counter == N:        
        return 0
    else:
        
        return 1




if __name__=="__main__":

    test_post_api(N = N, url = url)

    time.sleep(5)
    
    counter = test_database()
    
    result = compare_results(N = N, counter = counter)

    if result == 0:
        print("Tests passed successfully")
        time.sleep(3)
        exit(0)

    else:
        print("Test FAILED ...")
        time.sleep(3)
        exit(1)

        
        
