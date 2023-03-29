// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsItemsList} = props

  return (
    <ul className="blogs-list">
      {blogsItemsList.map(eachItem => (
        <BlogItem key={eachItem.id} blogItems={eachItem} />
      ))}
    </ul>
  )
}

export default BlogList
