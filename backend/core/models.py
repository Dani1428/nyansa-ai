from django.db import models

class Language(models.Model):
    code = models.CharField(max_length=10) # e.g., EN, FR, ZU
    name = models.CharField(max_length=100) # e.g., Swahili (Kenya)
    samples_count = models.CharField(max_length=50) # e.g., 1.2M Samples
    active = models.BooleanField(default=True)
    archived = models.BooleanField(default=False)

    def __str__(self):
        return self.name

class Expert(models.Model):
    STATUS_CHOICES = (
        ('Active', 'Active'),
        ('Idle', 'Idle')
    )

    name = models.CharField(max_length=255)
    email = models.EmailField()
    avatar_url = models.URLField(max_length=1000, blank=True, null=True)
    specialization = models.CharField(max_length=255)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Active')
    
    # We can use a simple comma separated string or ManyToMany. Let's use simple string or M2M.
    # A ManyToManyField is cleaner.
    languages = models.ManyToManyField(Language, related_name="experts")

    def __str__(self):
        return self.name
