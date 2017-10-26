import datetime

datetime_now = datetime.datetime.now()

print(datetime_now)


startTime = datetime.datetime.strptime('2017-10-20 00:12:13', "%Y-%m-%d %H:%M:%S")
endTime = datetime.datetime.strptime('2017-10-22 23:12:13', "%Y-%m-%d %H:%M:%S")


startDateTime = startTime
datetime_list = []
while startDateTime < endTime:
	datetime_list.append(startDateTime)
	startDateTime = startDateTime + datetime.timedelta(hours=1)

print('---------datetime_list-----------')
print(datetime_list)

datetime_str_list = []
for i in range(len(datetime_list)):
	datetime_str_list.append(datetime_list[i].strftime("%Y-%m-%d %H:%M:%S"))

print('---------datetime_str_list-----------')
print(datetime_str_list)
