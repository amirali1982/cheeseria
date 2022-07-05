curl --location --request POST 'http://localhost:8080/cheeseria' \
--form 'cheese="{
    \"name\": \"Cheese 2\",
    \"color\": \"Red\",
    \"price\": \"10.15\"
}"' \
--form 'file=@"caerphilly.jpg"'