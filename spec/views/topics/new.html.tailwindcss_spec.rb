require 'rails_helper'

RSpec.describe 'topics/new', type: :view do
  before(:each) do
    assign(:topic, Topic.new)
  end

  it 'renders new topic form' do
    render

    assert_select 'form[action=?][method=?]', topics_path, 'post' do
      assert_select 'input[name=?]', 'topic[title]'

      assert_select 'input[name=?]', 'topic[description]'

      assert_select 'input[name=?]', 'topic[tag_id]'
    end
  end
end
