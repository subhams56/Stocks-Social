# Generated by Django 4.0.6 on 2023-05-06 08:35

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('elysium_app', '0011_remove_stock_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='stock',
            name='user',
            field=models.ForeignKey(default=400, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]
