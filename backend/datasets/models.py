from django.db import models

class Dataset(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    dataset_type = models.CharField(max_length=50) # 'Text Corpus', 'Audio', etc.
    language = models.CharField(max_length=100, blank=True, null=True)
    size_info = models.CharField(max_length=100) # e.g., '10k images', '50 hours'
    sector = models.CharField(max_length=100) # e.g., 'Agriculture', 'NLP'
    is_available = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
