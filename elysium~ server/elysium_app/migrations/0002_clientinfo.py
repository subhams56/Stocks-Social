# Generated by Django 4.0.6 on 2022-07-14 12:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('elysium_app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ClientInfo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('capital', models.IntegerField()),
                ('boughtFrom', models.URLField(max_length=50)),
                ('description', models.CharField(max_length=50)),
            ],
        ),
    ]
