from flask_appbuilder.models.mixins import AuditMixin, FileColumn, ImageColumn
from sqlalchemy import Column, Integer, String, ForeignKey, Date, DateTime, SmallInteger, Float, Boolean
from sqlalchemy.orm import relationship
from flask_appbuilder import Model

import datetime

"""

You can use the extra Flask-AppBuilder fields and Mixin's

AuditMixin will add automatic timestamp of created and modified by who


"""


class ConcLocation(Model):
    id = Column(Integer, primary_key=True)
    location_no = Column(String(10), unique=True, nullable=False)
    location_name = Column(String(50))

    def __repr__(self):
        return self.location_no


class ConcGateway(Model):
    id = Column(Integer, primary_key=True)
    gateway_addr = Column(String(4), unique=True, nullable=False)
    conc_location_id = Column(Integer, ForeignKey('conc_location.id'), nullable=False)
    conc_location = relationship("ConcLocation")

    def __repr__(self):
        return self.gateway_addr


class ConcRegion(Model):
    id = Column(Integer, primary_key=True)
    region_no = Column(String(10))
    region_name = Column(String(50))
    conc_location_id = Column(Integer, ForeignKey('conc_location.id'), nullable=False)
    conc_location = relationship("ConcLocation")
    conc_gateway_id = Column(Integer, ForeignKey('conc_gateway.id'), nullable=False)
    conc_gateway = relationship("ConcGateway")

    def __repr__(self):
        return self.region_name


class ConcNode(Model):
    id = Column(Integer, primary_key=True)
    node_addr = Column(String(8), unique=True)
    conc_location_id = Column(Integer, ForeignKey('conc_location.id'), nullable=False)
    conc_location = relationship("ConcLocation")
    conc_gateway_id = Column(Integer, ForeignKey('conc_gateway.id'), nullable=False)
    conc_gateway = relationship("ConcGateway")
    conc_region_id = Column(Integer, ForeignKey('conc_region.id'), nullable=False)
    conc_region = relationship("ConcRegion")

    def __repr__(self):
        return self.node_addr


class ConcTemp(Model):
    id = Column(Integer, primary_key=True)
    conc_location_id = Column(Integer, ForeignKey('conc_location.id'), nullable=False)
    conc_location = relationship("ConcLocation")
    conc_gateway_id = Column(Integer, ForeignKey('conc_gateway.id'), nullable=False)
    conc_gateway = relationship("ConcGateway")
    conc_region_id = Column(Integer, ForeignKey('conc_region.id'), nullable=False)
    conc_region = relationship("ConcRegion")
    conc_node_id = Column(Integer, ForeignKey('conc_node.id'), nullable=False)
    conc_node = relationship("ConcNode", backref = 'conc_node')
    reserve = Column(String(10))
    temp1 = Column(Float)
    temp2 = Column(Float)
    temp3 = Column(Float)
    temp4 = Column(Float)
    temp5 = Column(Float)
    temp6 = Column(Float)
    battery_vol = Column(SmallInteger)
    datetime = Column(DateTime)

    def __repr__(self):
        return str(self.datetime)


        
