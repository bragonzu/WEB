# Generated by Django 4.1.1 on 2022-09-24 20:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0009_alter_user_phone'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rule',
            name='name',
            field=models.CharField(choices=[('A', 'ADMIN'), ('E', 'EMPLEADO'), ('B', 'EMPLEADO_2')], max_length=10),
        ),
    ]
