from datetime import datetime, timedelta
from fastapi import FastAPI,APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
import models 
from database import engine,SessionLocal
from pydantic import BaseModel
from typing import List,Union
from jose import jwt, JWTError
from sqlalchemy.orm import Session
from passlib.context import CryptContext
from typing_extensions import Annotated
from fastapi.middleware.cors import CORSMiddleware


router = APIRouter(
    prefix = '/candidate',
    tags = ['candidate']
)

class createRoles(BaseModel):
    role : str
    status :str
    rank : str
    area :str
    cname : str

class createCandidates(BaseModel):
    name :str
    email :str
    org :str
    origin :str
    difficulty  :int
    subscribe :bool

    class Config:
        orm_mode = True
        from_attributes = True

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session,Depends(get_db)]

@router.post("/addCand",status_code = status.HTTP_201_CREATED)
async def createCandidate(db:db_dependency, create_Candidate_Request: createCandidates):
    # print(f"Received name: {createCandidates.name}")
    print(f"Received email: {create_Candidate_Request.name}")


    create_cand_model = models.Candidate(
        candidate_name = create_Candidate_Request.name,
        candidate_email = create_Candidate_Request.email,
        candidate_org = create_Candidate_Request.org,
        candidate_origin = create_Candidate_Request.origin,
        reach_difficulty = create_Candidate_Request.difficulty,
        subscribe = create_Candidate_Request.subscribe
    )
    db.add(create_cand_model)
    db.commit()

@router.post("/addRole",status_code = status.HTTP_201_CREATED)
async def createRole(db:db_dependency, create_Role_Request: createRoles):
    create_role_model = models.Role(
        role = create_Role_Request.role,
        status = create_Role_Request.status,
        rank = create_Role_Request.rank,
        area = create_Role_Request.area,
        cname = create_Role_Request.cname
    )
    db.add(create_role_model)
    db.commit()


def convert_to_dict(candidate):
    return {
        "name": candidate.candidate_name,
        "email": candidate.candidate_email,
        "org": candidate.candidate_org,
        "origin": candidate.candidate_origin,
        "difficulty": candidate.reach_difficulty,
        "subscribe": candidate.subscribe
    }
# Return all candidates
@router.get("/candidates", response_model=List[createCandidates])
async def get_all_candidates(db:Session = Depends(get_db),skip: int = 0):
    results = db.query(models.Candidate).offset(skip).all()
    print(results)
    if not results:
        raise HTTPException(status_code=404, detail="User not found")
    
    return [convert_to_dict(candidate) for candidate in results]


def convert_to_dict(role):
    return {
        "role": role.role,
        "status": role.status,
        "rank": str(role.rank),
        "area": role.area,
        "cname": role.cname,
    }
    

# # Return specific candidates based on roles
@router.get("/candidates/role/{role}", response_model=List[createRoles])
async def get_candidates_by_role(role: str,db:Session = Depends(get_db),skip: int = 0):
    roles = db.query(models.Role).filter(models.Role.role == role.lower()).all()
    print(roles[0].rank)
    if not roles:
        raise HTTPException(status_code=404, detail=f"No candidates with role '{role}' found")
    return [convert_to_dict(candidate) for candidate in roles]

