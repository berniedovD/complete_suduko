# -*- coding: utf-8 -*-
"""
Created on Wed Oct 13 16:47:06 2021

@author: medadocadmin
"""
import pandas as pd
from sqlalchemy import create_engine
from sqlalchemy.engine.url import URL

hostname="dovbear.org"
dbport=r'3306'
database='appdb'
username='appdbuser'
password='tortola1'
#%%
dburl = URL.create('mysql',
                              host=hostname,
                              port=dbport,
                              database=database,
                              username=username,
                              password=password)
db_engine = create_engine(dburl)
dbconn = db_engine.connect()
#%%



#%%    



newpuz = pd.read_csv('./scripts/puzl.csv')
newpuz.to_sql('sudukoapi_puzzle', dbconn, if_exists='replace',  index=False)
print ("succesfully loaded puzzle database with default puzzles" )
