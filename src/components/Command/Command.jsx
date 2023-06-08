import React, { useState, useEffect } from 'react';
import CommandOutput from './../CommandOutput/CommandOutput';
import './index.css'
const Command = () => {
        const [output, setOutput] = useState('');

        useEffect(() => {
                simulateCommand();
        }, []);

        const simulateCommand = () => {
        mmand = 'ls -l'; // Comando a simular
                      
                    // Simulación de ejecución del comando
              setOutput('Ejecutando el comado ' + command + '"...');
                        
           Simulación de salida del comando
                      setTimeout(() => {
      setOutput('Resultado del comando:\n[El resultado del comando aquí]');
          }, 2000); // Simulación de demora de 2 segundos
        
            
                    turn (
                          iv>
                              >
                              <span className='command>user@lcalhost:</span>
                          pan className="path">~$</span> 
                        <CommandOutput output={output} />
              </p>
        </div>
  );
};

     default Command;
