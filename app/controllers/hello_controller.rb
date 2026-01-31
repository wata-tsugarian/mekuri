class HelloController < ApplicationController
  def index
    render inertia: "Hello", props: {
      content: "Rails & React with gem inertia_rails"
    }
  end
end
