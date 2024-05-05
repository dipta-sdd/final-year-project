# Generated by Django 4.2 on 2024-04-29 17:53

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0015_alter_user_role'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='education',
            name='degree',
        ),
        migrations.RemoveField(
            model_name='education',
            name='field_of_study',
        ),
        migrations.RemoveField(
            model_name='education',
            name='graduation_year',
        ),
        migrations.RemoveField(
            model_name='education',
            name='institution',
        ),
        migrations.RemoveField(
            model_name='education',
            name='start_date',
        ),
        migrations.AddField(
            model_name='user',
            name='father_name',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='mother_name',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='education',
            name='id',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL, verbose_name='Id of user'),
        ),
    ]