import React from 'react'
import Button from '@/components/ButtonBase'

const SayItem:React.FC = () => {
  return (
    <div className="flex gap-6 mb-8">
      <div className="w-20 h-20 overflow-hidden rounded-lg">
        <img src={`https://picsum.photos/200/300?${Math.random()}`} alt="" className="w-full" />
      </div>
      <div className="flex-1 px-6 py-6 rounded-xl hover:scale-[1.03] transition-all duration-200 bg-themeColor1">
        <div className="mb-3 text-xl">
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatem numquam voluptates nobis maiores fugit fuga, necessitatibus doloremque nihil quo odio molestiae minima delectus in eius ad dicta enim ducimus!</span>
          <div className="mt-2">
            <img src={`https://picsum.photos/200/300?${Math.random()}`} alt="" />
          </div>
        </div>
        <div className="text-right">
          <Button type="dark" style={{padding: '2px 8px'}}>2023-07-08 19:37:48</Button>
        </div>
      </div>
    </div>
  )
}

export default SayItem;
