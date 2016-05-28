module Homework
	require 'time'
	require 'pry'

	class Server < Sinatra::Base
		# array of compliments
		compliments = [
		  "People behind you in class think you are the perfect height.",
		  "Your instructors think you're amazing.",
		  "Your posture during breaks effectively masks your exhaustion.",
		  "Your commit messages are an inspiration to us all",
		  "Your fingers are magic on the keys",
		  "You are the moon of my life...my sun and stars"
		]
		# request to randomly sample a compliment and pass it to index.erb
		get "/" do
			@compliment = compliments.sample
			puts params
			erb :index
		# # for debugging elements within class Server
		# binding.pry
		end # get "/"

		# create a personalized compliment
		get	"/:name" do 
			@name = params[:name]
			puts params
			erb :name
		end # get "/:name"


	end # class Server
end # module Homework

		
		
		
		
		
		
		
		



