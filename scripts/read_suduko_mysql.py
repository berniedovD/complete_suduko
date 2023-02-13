# -*- coding: utf-8 -*-
"""
Created on Wed Oct 13 16:47:06 2021

@author: medadocadmin
"""
import pandas as pd

from sqlalchemy import create_engine
from sqlalchemy.engine.url import URL


hostname="66.23.227.5"
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
puzl  = pd.read_sql('select * from sudukoapi_puzzle', dbconn)
puzl = puzl[['puzzleID', 'puzzleName', 'sudukoString', 'difficultyLevel', 'newfield']]
puzl.newfield = 'a'
print (puzl)
puzl.to_csv('puzl.csv', index=False)

puzl.to_sql('tab2', dbconn, if_exists='replace')
