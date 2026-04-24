from django.db import models

class ContactMessage(models.Model):
    STATUS_CHOICES = (
        ('New', 'New'),
        ('In Review', 'In Review'),
        ('Approved', 'Approved'),
        ('Rejected', 'Rejected')
    )

    name = models.CharField(max_length=255)
    email = models.EmailField()
    company = models.CharField(max_length=255, blank=True, null=True)
    project_type = models.CharField(max_length=255)
    message = models.TextField(blank=True, null=True)
    status = models.CharField(max_length=50, choices=STATUS_CHOICES, default='New')
    ai_suggestion = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.project_type}"
