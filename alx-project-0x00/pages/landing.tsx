import Card from '@/components/Card'
import Button from '@/components/Button';

const Landing: React.FC =() => {
return (
    <div >
        <h1 className=" text-xl font-extralight">Landing Page</h1>
        <Card />    

        <div className="p-10 space-y-4">
        
            <Button 
                title='Small Button' 
                style='px-2 py-1 text-sm rounded-sm' 
            />
            
            <Button 
                title='Medium Button' 
                style='rounded-md'
            />

            <Button 
                title='Large Button' 
                style='px-8 py-4 text-lg rounded-full' 
            />


            <Button 
                title='Custom Style' 
                style='bg-red-700 hover:bg-red-800 rounded-lg' 
            />
        </div>
        </div>

)
}
export default Landing;