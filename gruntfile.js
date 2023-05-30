module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less:{

            //criando configurações diferentes a partir de ambientes diferentes, ou seja, a configuração padrao é develapment
            development:{
                files:{
                    //"arquivo de destino" :"arquivo de origem " 
                    'main.css':'main.less'
                }
            },
            //criando a versão de produção (versão final que o usuario acessara )
            production:{
                //passando o atributo de comprimir 
                options:{
                    compress:true,
                },
                //informando o arquivo de destino que armazenarar a compressão: arquivo de origem que serar comprimido
                files:{
                    'main.min.css':'main.less'
                }
            }
        },
        //caso queira utilizar o sass:
        sass:{
            //no less => development , e no sass => dist
            dist: {
                options:{
                    style:'compressed'
                },
                files:{
                    'main2.css': 'main.scss'
                }
            }
        }
    })

    //criando uma nova função atravês do grunt "sempre utlizamos o grunt.registerTask("nome-da_-função", {oque a função farar})0 <== semelhante ao gulp"
    grunt.registerTask('olaGrunt',function(){
        const done = this.async()
        setTimeout(function() {
            console.log('ola Grunt')
            done()
        }, 3000)
        
    })
    
    //instalação do grunt-contrib-less ==> npm install --save-dev grunt-contrib-less
    grunt.loadNpmTasks('grunt-contrib-less')

    // instalção do grunt-contrib-sass => npm install --save-dev grunt-contrib-sass
    grunt.loadNpmTasks('grunt-contrib-sass')

    //declarando os plugis, para que execulte na hora de chamar a função 
    grunt.registerTask('default', ['less', 'sass'])
}