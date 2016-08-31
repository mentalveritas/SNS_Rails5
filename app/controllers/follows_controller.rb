class FollowsController < ApplicationController
  before_action :authenticate_user!
  before_action :check_post

  def create
    Follow.create(followed_id: params[:followed_id], follower_id: current_user.id)
    @post_user_id = params[:followed_id]
    @post_create = Post.find_by(id: params[:followed_id])
  end

  def destroy
    Follow.find_by(followed_id: params[:id], follower_id: current_user.id).destroy
    @post_user_id = params[:id]
    @post_destroy = Post.find_by(id: params[:id])
  end

  private

  def check_post
    @current_u = current_user
  end

end
