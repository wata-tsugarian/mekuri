class StaticsController < ApplicationController
  def guide
    render inertia: "statics/guide"
  end
end
