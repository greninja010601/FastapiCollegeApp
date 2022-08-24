from sqlalchemy import Boolean, Column, Integer, String
from database import Base

class Cse(Base):
    __tablename__ = "cse"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String)
    Specialization = Column(String)
    Experience= Column(String)
    Publications = Column(Integer)

class Mec(Base):
    __tablename__ = "mec"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String)
    Specialization = Column(String)
    Experience = Column(String)
    Publications = Column(Integer)

class Ece(Base):
    __tablename__ = "ece"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String)
    Specialization = Column(String)
    Experience = Column(String)
    Publications = Column(Integer)

class Civil(Base):
    __tablename__ = "civil"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String)
    Specialization = Column(String)
    Experience = Column(String)
    Publications = Column(Integer)