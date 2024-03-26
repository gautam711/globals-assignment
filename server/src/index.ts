import express, {Express} from "express";
import cors from "cors";

const app: Express = express();

app.use(cors({
    credentials: true
}))

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(3001, () => {
	console.log(`Server running on port 3001`);
});

