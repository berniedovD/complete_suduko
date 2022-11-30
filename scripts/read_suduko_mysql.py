# -*- coding: utf-8 -*-
"""
Created on Wed Oct 13 16:47:06 2021

@author: medadocadmin
"""
import pandas as pd

from sqlalchemy import create_engine
from sqlalchemy.engine.url import URL


hostname="54.158.55.239"
dbport=r'33061'
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

print (puzl)
