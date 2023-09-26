import React, { useState } from 'react'
import Card from '@/components/Card'


const Aside:React.FC = () => {
  const [cards] = useState<Array<number>>([1,3,7]);
  return (
    <div className="w-64">
      {
        cards.map(()=>{
          return (
            <Card className="h-64">
              <span>我是黄子韬</span>
            </Card>
          );
        })
      }
      <div className="sticky top-20">
        <Card style={{height: '600px'}}>
          <span>我才不是黄子韬</span>
        </Card>
        {
          cards.map(()=>{
            return (
              <Card className="h-64">
                <span>我是黄子韬</span>
              </Card>
            );
          })
        }
      </div>
    </div>
  )
}
export default Aside