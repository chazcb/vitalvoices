from django.contrib.auth.models import User
from django.db import models


class Seed(models.Model):
    # id is implicit

    author = models.ForeignKey(User)
    title = models.Text()
    content = models.Text()
    inspirations = models.Text()  # Should this be Text ??
    categories = models.Text()  # Should this be Text ??
    tags = models.Text()
    date_published = models.DateTimeField(auto_now_add=True)

    # seeds = Seed
    # engagements = Engagement


class Engagement(models.Model):
    author = models.ForeignKey(User)
    seed = models.ForeignKey('Seed', related_name='seeds')

    engagement_type_choices = (
        (1, 'Comment'),
        (2, 'Inspiration'),
        (3, 'Tag'),
        (4, 'Like'),
    )

    engagement_type = models.Integer(choices=engagement_type_choices)
    date_published = models.DateTimeField(auto_now_add=True)
    content = models.Text()
