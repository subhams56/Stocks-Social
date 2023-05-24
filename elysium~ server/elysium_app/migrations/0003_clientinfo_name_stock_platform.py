# Generated by Django 4.0.6 on 2022-07-17 07:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('elysium_app', '0002_clientinfo'),
    ]

    operations = [
        migrations.AddField(
            model_name='clientinfo',
            name='name',
            field=models.CharField(default=None, max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='stock',
            name='platform',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='holder', to='elysium_app.clientinfo'),
            preserve_default=False,
        ),
    ]
