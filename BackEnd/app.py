from fastapi import  Depends, FastAPI, HTTPException
import models 
from database import engine,SessionLocal
from pydantic import BaseModel
from typing import List
from sqlalchemy.orm import Session

app = FastAPI()
models.Base.metadata.create_all(bind=engine)
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# db_dependency = Annotated[Session,Depends(get_db())]

@app.get("/users/{user_id}")
async def get_user(user_id:int, db:Session = Depends(get_db)):
    result = db.query(models.User).filter(models.User.id == user_id).first()
    if not result:
        raise HTTPException(status_code=404, detail="User not found")
    
    return result

@app.get("/")
def read_root():
    return {"message": "Hello Aliens!!"}
    
@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}

