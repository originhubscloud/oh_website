# Generated by Django 3.2.12 on 2022-03-06 12:12

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='subscribed_people',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_name', models.CharField(blank=True, max_length=250, null=True)),
                ('user_email', models.CharField(blank=True, max_length=250, null=True)),
            ],
            options={
                'verbose_name': 'subscribed_people',
                'verbose_name_plural': 'subscribed_peoples',
            },
        ),
    ]
