# Generated by Django 4.2 on 2024-05-03 09:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0020_edu_degree_edu_level_edu_group_or_major_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='edu_degree',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='edu_group_or_major',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='edu_level',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]