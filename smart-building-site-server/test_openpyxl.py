# -*- coding: utf-8 -*- 

from openpyxl import load_workbook
from openpyxl import Workbook

wb = load_workbook('sample.xlsx')  #加载一个工作簿
print wb.get_sheet_names()

wb = Workbook()
#创建一个工作簿
ws1 = wb.active
#至少建立一个工作表
ws = wb.create_sheet("11",0)
ws1.title = "22"
#设置表的名字
ws.sheet_properties.tabColor = "2072BA"
#改变表选项卡的颜色
ws["F8"] = 38.1

ws.cell(row=8, column=9, value=29.1)
ws.cell(row=9, column=9, value=48.9)
ws.cell(row=10, column=9, value=40.3)


print(ws["A2"].value)

wb.save("sample1.xlsx")