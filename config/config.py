import os, os.path as path
from dotenv import load_dotenv

load_dotenv(verbose=True)
load_dotenv(path.join(path.dirname(__file__), '.env'))

class SystemConfig:
  DB_USER = os.getenv('DB_USER')
  DB_PASSWORD = os.getenv('DB_PASSWORD')
  DB_HOST = os.getenv('DB_HOST')
  DB_PORT = os.getenv('DB_PORT')
  DB_DATABASE = os.getenv('DB_DATABASE')

  SQLALCHEMY_DATABASE_URI = 'postgres://' \
    + DB_USER + ':' \
    + DB_PASSWORD + '@' \
    + DB_HOST + ':' \
    + DB_PORT + '/' \
    + DB_DATABASE
  SQLALCHEMY_TRACK_MODIFICATIONS = False

  CLIENT_URL = os.getenv('CLIENT_URL')

Config = SystemConfig
