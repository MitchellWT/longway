import { nodeResolve } from '@rollup/plugin-node-resolve';          
                        
export default [        
    {                   
        input: "js/index.js",    
        output: {       
            file: "js/index.js",    
        },              
        plugins: [nodeResolve()],    
    },                  
    {                   
        input: "js/another.js",    
        output: {       
            file: "js/another.js",    
        },              
        plugins: [nodeResolve()],    
    },                  
]; 
