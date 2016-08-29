class LikesController < ApplicationController
  before_action :authenticate_user!

  def like_toggle
    like = Like.find_by(user_id: current_user.id, post_id: params[:post_id])
    @li_post = Post.find_by(id: params[:post_id])
    @like = like
    @curren_u = current_user
    if like.nil?
      Like.create(user_id: current_user.id, post_id: params[:post_id])
    else
      like.destroy
    end

  end
end
