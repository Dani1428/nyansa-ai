from rest_framework import viewsets
from .models import Dataset
from .serializers import DatasetSerializer

class DatasetViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows datasets to be viewed.
    """
    queryset = Dataset.objects.all().order_by('-created_at')
    serializer_class = DatasetSerializer
    filterset_fields = ['dataset_type', 'language', 'sector']
