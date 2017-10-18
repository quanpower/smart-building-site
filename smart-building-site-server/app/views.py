from flask import render_template
from flask_appbuilder.models.sqla.interface import SQLAInterface
from flask_appbuilder import ModelView
from app import appbuilder, db
from .models import ConcLocation, ConcGateway, ConcRegion, ConcNode, ConcTemp
"""
    Create your Views::


    class MyModelView(ModelView):
        datamodel = SQLAInterface(MyModel)


    Next, register your Views::


    appbuilder.add_view(MyModelView, "My View", icon="fa-folder-open-o", category="My Category", category_icon='fa-envelope')
"""

"""
    Application wide 404 error handler
"""
@appbuilder.app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html', base_template=appbuilder.base_template, appbuilder=appbuilder), 404



class ConcLocationModelView(ModelView):
    datamodel = SQLAInterface(ConcLocation)

    list_columns = ['location_no', 'location_name']
    base_order = ('location_no', 'asc')
    show_fieldsets = [
        ('Summary', {'fields': ['location_no', 'location_name']}),
    ]

    add_fieldsets = [
        ('Summary', {'fields': ['location_no', 'location_name']}),
    ]

    edit_fieldsets = [
        ('Summary', {'fields': ['location_no', 'location_name']}),
    ]

class ConcGatewayModelView(ModelView):
    datamodel = SQLAInterface(ConcGateway)

    list_columns = ['gateway_addr', 'conc_location.location_no', 'conc_location.location_name']

    base_order = ('gateway_addr', 'asc')
    show_fieldsets = [
        ('Summary', {'fields': ['gateway_addr', 'conc_location']}),
    ]

    add_fieldsets = [
        ('Summary', {'fields': ['gateway_addr', 'conc_location']}),
    ]

    edit_fieldsets = [
        ('Summary', {'fields': ['gateway_addr', 'conc_location']}),
    ]

class ConcRegionModelView(ModelView):
    datamodel = SQLAInterface(ConcRegion)

    list_columns = ['region_no', 'region_name', 'conc_location.location_no', 'conc_gateway.gateway_addr']

    base_order = ('region_no', 'asc')
    show_fieldsets = [
        ('Summary', {'fields': ['region_no', 'region_name', 'conc_location', 'conc_gateway']}),
    ]

    add_fieldsets = [
        ('Summary', {'fields': ['region_no', 'region_name', 'conc_location', 'conc_gateway']}),
    ]

    edit_fieldsets = [
        ('Summary', {'fields': ['region_no', 'region_name', 'conc_location', 'conc_gateway']}),
    ]

class ConcNodeModelView(ModelView):
    datamodel = SQLAInterface(ConcNode)

    list_columns = ['node_addr', 'conc_location.location_no', 'conc_gateway.gateway_addr', 'conc_region.region_no']

    base_order = ('node_addr', 'asc')
    show_fieldsets = [
        ('Summary', {'fields': ['node_addr', 'conc_location', 'conc_gateway', 'conc_region']}),
    ]

    add_fieldsets = [
        ('Summary', {'fields': ['node_addr', 'conc_location', 'conc_gateway', 'conc_region']}),
    ]

    edit_fieldsets = [
        ('Summary', {'fields': ['node_addr', 'conc_location', 'conc_gateway', 'conc_region']}),
    ]



class ConcTempModelView(ModelView):
    datamodel = SQLAInterface(ConcTemp)

    list_columns = ['conc_location.location_no', 'conc_gateway.gateway_addr', 'conc_region.region_no', 'conc_node.node_addr']

    base_order = ('conc_node.node_addr', 'asc')
    show_fieldsets = [
        ('Summary', {'fields': ['conc_location', 'conc_gateway', 'conc_region', 'conc_node']}),
        (
            'TempData',
            {'fields': ['temp1', 'temp2', 'temp3', 'temp4', 'temp5', 'temp6', 'battery_vol', 'datetime'], 'expanded': True}),
    ]

    add_fieldsets = [
        ('Summary', {'fields': ['conc_location', 'conc_gateway', 'conc_region', 'conc_node']}),
        (
            'TempData',
            {'fields': ['temp1', 'temp2', 'temp3', 'temp4', 'temp5', 'temp6', 'battery_vol', 'datetime'], 'expanded': True}),
    ]
    edit_fieldsets = [
        ('Summary', {'fields': ['conc_location', 'conc_gateway', 'conc_region', 'conc_node']}),
        (
            'TempData',
            {'fields': ['temp1', 'temp2', 'temp3', 'temp4', 'temp5', 'temp6', 'battery_vol', 'datetime'], 'expanded': True}),
    ]




db.create_all()



appbuilder.add_view(ConcLocationModelView, "concrete location", icon="icon-home", label=_("Concrete Location"), category="Concrete", category_icon='icon-home', category_label=_("Concrete Setting"))
appbuilder.add_view(ConcRegionModelView, "region", icon="icon-home", label=_("Region"), category="Concrete")


appbuilder.add_view(ConcGatewayModelView, "concrete gateway", icon="icon-cloud", label=_("Concrete Gateway"), category="Lora", category_icon='icon-cog', category_label=_("Lora Setting"))
appbuilder.add_view(ConcNodeModelView, "concrete node", icon=" icon-circle", label=_("Concrete Node"), category="Lora")

appbuilder.add_view(ConcTempModelView, "temperature records", icon="icon-list", label=_("Concrete Temperature Records"), category="Concrete Temperature", category_icon='icon-signal ', category_label=_("Concrete Temperature") )
