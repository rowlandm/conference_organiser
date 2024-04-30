from sqlalchemy import Boolean, Column, ForeignKey,Integer,String
from sqlalchemy.orm import relationship

from database import Base

class User(Base):
    __tablename__ = 'User'
    id = Column(Integer,primary_key = True, index = True)
    user_name = Column(String, index = True)
    user_email = Column(String,index = True)
    password = Column(String,index = True)
    role = Column(String, index = True)

    

class Candidate(Base):
    __tablename__ = 'Candidate'
    id = Column(Integer, primary_key = True, index = True)
    candidate_name = Column(String,unique = True)
    candidate_email = Column(String)
    candidate_org = Column(String)
    candidate_origin = Column(String)s
    reach_difficulty  = Column(Integer)
    subscribe = Column(Boolean)

    # roles = relationship("Role", back_populates = "rid")
    roles = relationship("Role", back_populates="candidate")

class Role(Base):
    __tablename__ = 'Role'
    id = Column(Integer, primary_key = True)
    role = Column(String) # keynote speaker, sponser, session chair, stakeholder
    status = Column(String)
    rank = Column(Integer) # 0 for nor role candidate
    area = Column(String) 
    cname = Column(String, ForeignKey(Candidate.candidate_name))

    # candis = relationship("Candidate", back_populates = "id")
    candidate = relationship("Candidate", back_populates="roles")
