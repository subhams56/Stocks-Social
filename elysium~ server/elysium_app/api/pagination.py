from rest_framework.pagination import PageNumberPagination, LimitOffsetPagination,CursorPagination

class StockListPagination(PageNumberPagination):
    page_size = 10
    page_query_param ='p'
    page_size_query_param='size'
    max_page_size= 30
    last_page_strings = 'end'
    
class StockListLOPagination(LimitOffsetPagination):
    default_limit= 10
    max_limit = 10
    limit_query_param = 'start'
    
class StockListCPagination(CursorPagination):
    page_size = 10
    ordering='-created'