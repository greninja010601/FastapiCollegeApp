import uvicorn
from fastapi import FastAPI, Depends
import models
from database import engine, SessionLocal
from sqlalchemy.orm import Session
from pydantic import BaseModel, Field
from fastapi.staticfiles import StaticFiles
app = FastAPI()

app.mount("/", StaticFiles(directory="../Frontend/static", html= True), name="static")

models.Base.metadata.create_all(bind=engine)

def get_db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()

class Cse(BaseModel):
    name: str
    email: str
    Specialization: str
    Experience: str
    Publications: str

class Mec(BaseModel):
    name: str
    email: str
    Specialization: str
    Experience: str
    Publications: str

class Ece(BaseModel):
    name: str
    email: str
    Specialization: str
    Experience: str
    Publications: str

class Civil(BaseModel):
    name: str
    email: str
    Specialization: str
    Experience: str
    Publications: str

@app.get("/cse/")
async def gets_database(db: Session = Depends(get_db)):
    return db.query(models.Cse).all()

@app.get("/mec/")
async def gets_database(db: Session = Depends(get_db)):
    return db.query(models.Mec).all()

@app.get("/ece/")
async def gets_database(db: Session = Depends(get_db)):
    return db.query(models.Ece).all()
@app.get("/civil/")
async def gets_database(db: Session = Depends(get_db)):
    return db.query(models.Civil).all()



@app.post("/cse/")
async def create_cse(cse: Cse, db: Session = Depends(get_db)):
    cse_model = models.Cse()
    cse_model.name = cse.name
    cse_model.email = cse.email
    cse_model.Specialization = cse.Specialization
    cse_model.Experience = cse.Experience
    cse_model.Publications = cse.Publications

    db.add(cse_model)
    db.commit()

    return  {
        'status': 201,
        'transaction': 'Successful'
    }
@app.post("/mec/")
async def create_mec(mec: Mec, db: Session = Depends(get_db)):
    mec_model = models.Mec()
    mec_model.name = mec.name
    mec_model.email = mec.email
    mec_model.Specialization = mec.Specialization
    mec_model.Experience = mec.Experience
    mec_model.Publications = mec.Publications

    db.add(mec_model)
    db.commit()

    return  {
        'status': 201,
        'transaction': 'Successful'
    }
@app.post("/Ece")
async def create_ece(ece: Ece, db: Session = Depends(get_db)):
    ece_model = models.Ece()
    ece_model.name = ece.name
    ece_model.email = ece.email
    ece_model.Specialization = ece.Specialization
    ece_model.Experience = ece.Experience
    ece_model.Publications = ece.Publications

    db.add(ece_model)
    db.commit()

    return  {
        'status': 201,
        'transaction': 'Successful'
    }
@app.post("/Civil")
async def create_civil(civil: Civil, db: Session = Depends(get_db)):
    civil_model = models.Civil()
    civil_model.name = civil.name
    civil_model.email = civil.email
    civil_model.Specialization = civil.Specialization
    civil_model.Experience = civil.Experience
    civil_model.Publications = civil.Publications

    db.add(civil_model)
    db.commit()

    return  {
        'status': 201,
        'transaction': 'Successful'
    }
if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
