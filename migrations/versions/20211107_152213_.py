"""empty message

Revision ID: d8151b76b161
Revises: 9f53ac1fa188
Create Date: 2021-11-07 15:22:13.671380

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd8151b76b161'
down_revision = '9f53ac1fa188'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.Column('profile_picture', sa.String(length=255), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('spots',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.Column('address', sa.String(length=255), nullable=False),
    sa.Column('city', sa.String(length=50), nullable=False),
    sa.Column('state', sa.String(length=50), nullable=False),
    sa.Column('country', sa.String(length=50), nullable=False),
    sa.Column('lat', sa.Numeric(), nullable=False),
    sa.Column('lng', sa.Numeric(), nullable=False),
    sa.Column('name', sa.String(length=255), nullable=False),
    sa.Column('price', sa.Numeric(), nullable=False),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('bookings',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('spotId', sa.Integer(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.Column('startDate', sa.DateTime(), nullable=False),
    sa.Column('endDate', sa.DateTime(), nullable=False),
    sa.ForeignKeyConstraint(['spotId'], ['spots.id'], ),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('images',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('spotId', sa.Integer(), nullable=False),
    sa.Column('url', sa.Text(), nullable=False),
    sa.ForeignKeyConstraint(['spotId'], ['spots.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('id')
    )
    op.create_table('reviews',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('spotId', sa.Integer(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.Column('review', sa.Text(), nullable=False),
    sa.ForeignKeyConstraint(['spotId'], ['spots.id'], ),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('reviews')
    op.drop_table('images')
    op.drop_table('bookings')
    op.drop_table('spots')
    op.drop_table('users')
    # ### end Alembic commands ###
