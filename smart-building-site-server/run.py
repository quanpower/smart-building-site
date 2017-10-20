from app import app
from app import db

from app.models import ConcGateway, ConcNode, ConcTemp
from sqlalchemy import and_
import datetime


gatewayAddr='1'

nodeAddrs = ['110', '112', '114']

startTime = datetime.datetime.strptime('2017-10-19 00:00:00', "%Y-%m-%d %H:%M:%S")
endTime = datetime.datetime.strptime('2017-10-20 11:00:00', "%Y-%m-%d %H:%M:%S")

for i in range(len(nodeAddrs)):
    nodeAddr = nodeAddrs[i]
    print('--------nodeAddr-----------')
    print(nodeAddr)
    temps = db.session.query(ConcTemp).filter(ConcTemp.datetime.between(startTime, endTime)).all()
    print('-----temps:-----')
    print(temps)

    temp_records = db.session.query(ConcTemp.temp1, ConcTemp.temp2, ConcTemp.temp3, ConcTemp.temp4, ConcTemp.temp5, ConcTemp.temp6, ConcTemp.datetime).filter(and_(ConcGateway.gateway_addr == gatewayAddr, ConcNode.node_addr == nodeAddr, ConcTemp.datetime.between(startTime, endTime))).order_by(ConcTemp.datetime.desc()).all()

    temp_log = []
    for j in xrange(len(temp_records)):
        temp_log.append({"key": i, "time": temp_records[i][6].strftime("%Y-%m-%d %H:%M:%S"), "Temp1": temp_records[i][0], "Temp2": temp_records[i][1], "Temp3": temp_records[i][2], "Temp4": temp_records[i][3], "Temp5": temp_records[i][4], "Temp6": temp_records[i][5]})

    temps_reverse = temp_log[::-1]

    print('---------temp_records-----------')
    print(temp_records)

    print('---------temps_reverse-----------')
    print(temps_reverse)



app.run(host='0.0.0.0', port=9999, debug=True)

