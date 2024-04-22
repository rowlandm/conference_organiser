from sqlalchemy import Boolean, Column, ForeignKey,Integer,String
from database import Base

class User(Base):
    __tablename__ = 'User'
    id = Column(Integer,primary_key = True, index = True)
    user_name = Column(String, index = True)
    user_email = Column(String,index = True)
    password = Column(String,index = True)
    role = Column(String, index = True)
