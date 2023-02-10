import pandas as pd
from sqlalchemy import create_engine
from sqlalchemy.engine.url import URL

hostname = r'dovbear.org'

dbport  = r'3306'
dbname = 'appdb'
dbuser = 'appdbuser'
dbpwd = 'tortola1'

dburl = URL.create('mysql',
                              host=hostname,
                              port=dbport,
                              database=dbname,
                              username=dbuser,
                              password=dbpwd)
db_engine = create_engine(dburl)

dbconn = db_engine.connect()

puzlist = pd.read_sql('select * from sudukoapi_puzzle', con=dbconn)

print (puzlist)
