from sqlalchemy import Boolean, Column, ForeignKey,Integer,String
from sqlalchemy.orm import relationship

from database import Base

class User(Base):
    __tablename__ = 'User'
    id = Column(Integer,primary_key = True, index = True,autoincrement=True)
    user_name = Column(String, index = True)
    user_email = Column(String,index = True)
    password = Column(String,index = True) # stored as Encrypted hash code 
    role = Column(String, index = True)

    

class Candidate(Base):
    __tablename__ = 'Candidate'
    id = Column(Integer, primary_key = True, index = True,autoincrement=True)
    candidate_name = Column(String,unique = True)
    candidate_email = Column(String)
    candidate_org = Column(String) # organizer of the candidate
    candidate_origin = Column(String) # country of the candidate
    reach_difficulty  = Column(Integer) # how difficulty a candidate can be reached 
    subscribe = Column(Boolean)  # subscribe status of the candidate, normally will be set as false for the simple subscriber 

    # roles = relationship("Role", back_populates = "rid")
    roles = relationship("Role", back_populates="candidate")

class Role(Base):
    __tablename__ = 'Role'
    id = Column(Integer, primary_key = True,autoincrement=True)
    role = Column(String) # keynote speaker, sponser, session chair, stakeholder
    status = Column(String) # status of reply
    rank = Column(Integer) # 0 for nor role candidate
    area = Column(String)  # the description of the role for example, day 1 or day 2 fro keynote speaker, Asia or AUNZ representative for panelist
    cname = Column(String, ForeignKey(Candidate.candidate_name)) # foreign key to candidate table

    # candis = relationship("Candidate", back_populates = "id")
    candidate = relationship("Candidate", back_populates="roles")
