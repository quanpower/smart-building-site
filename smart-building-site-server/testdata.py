# -*- coding:utf-8 -*-

import logging
from app import db
import random
import datetime
import bitstring
from utils import index_color
from app.models import ConcLocation, ConcGateway, ConcRegion, ConcNode, ConcTemp


log = logging.getLogger(__name__)


# mock ConcLocation
try:
    concreteLocations = list()
    concreteLocations.append(ConcLocation(location_no='10001', location_name=u'江苏扬建-南翔印象城'))

    for i in xrange(len(concreteLocations)):
        db.session.add(concreteLocations[i])

    db.session.commit()

except Exception, e:
    log.error("Creating concreteLocations: %s", e)
    db.session.rollback()


# mock ConcGateway
try:
    concreteGateways = list()
    concreteGateways.append(ConcGateway(gateway_addr='001', conc_location=concreteLocations[0]))

    for i in xrange(len(concreteGateways)):
        db.session.add(concreteGateways[i])

    db.session.commit()

except Exception, e:
    log.error("Creating concreteGateways: %s", e)
    db.session.rollback()


# mock ConcRegion
try:
    concreteRegions = list()
    concreteRegions.append(ConcRegion(region_no='001', region_name=u'A-1', conc_location=concreteLocations[0], conc_gateway=concreteGateways[0]))

    for i in xrange(len(concreteRegions)):
        db.session.add(concreteRegions[i])

    db.session.commit()

except Exception, e:
    log.error("Creating concreteRegions: %s", e)
    db.session.rollback()


# mock ConcNode
try:
    concreteNodes = list()
    concreteNodes.append(ConcNode(node_addr='102', conc_location=concreteLocations[0], conc_gateway=concreteGateways[0], conc_region=concreteRegions[0]))
    concreteNodes.append(ConcNode(node_addr='107', conc_location=concreteLocations[0], conc_gateway=concreteGateways[0], conc_region=concreteRegions[0]))
    concreteNodes.append(ConcNode(node_addr='110', conc_location=concreteLocations[0], conc_gateway=concreteGateways[0], conc_region=concreteRegions[0]))
    concreteNodes.append(ConcNode(node_addr='112', conc_location=concreteLocations[0], conc_gateway=concreteGateways[0], conc_region=concreteRegions[0]))
    concreteNodes.append(ConcNode(node_addr='114', conc_location=concreteLocations[0], conc_gateway=concreteGateways[0], conc_region=concreteRegions[0]))

    for i in xrange(len(concreteNodes)):
        db.session.add(concreteNodes[i])

    db.session.commit()

except Exception, e:
    log.error("Creating concreteNodes: %s", e)
    db.session.rollback()


#mock ConcTemp

for i in range(100):
    datetime_now = datetime.datetime.now()

    ct = ConcTemp()
    ct.conc_location = concreteLocations[0]
    ct.conc_gateway = concreteGateways[0]
    ct.conc_region = concreteRegions[0]
    ct.conc_node = concreteNodes[random.randint(0, 4)]
    ct.reserve = '00'
    ct.temp1 = round(random.uniform(30, 80), 1)
    ct.temp2 = round(random.uniform(30, 80), 1)
    ct.temp3 = round(random.uniform(30, 80), 1)
    ct.temp4 = round(random.uniform(30, 80), 1)
    ct.temp5 = round(random.uniform(30, 80), 1)
    ct.temp6 = round(random.uniform(30, 80), 1)
    ct.battery_vol = 3
    ct.datetime = datetime_now

    db.session.add(ct)
    try:
        db.session.commit()
        print "ConcTemp inserted", ct
    except Exception, e:
        log.error("Creating ConcTemp: %s", e)
        db.session.rollback()

