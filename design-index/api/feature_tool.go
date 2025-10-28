package handler

import (
	"encoding/json"
	"math/rand"
	"net/http"
	"os"
	"time"
)

type Tool struct {
	PrimaryKey          int    `json:"primary_key"`
	Category            string `json:"category"`
	ToolName            string `json:"tool_name"`
	Pricing             string `json:"pricing"`
	Website             string `json:"website"`
	Description         string `json:"description"`
	ExtendedDescription string `json:"extended_description"`
	OGImageLink         string `json:"og_image_link"`
}

var (
	tools           []Tool
	cachedTool      *Tool
	lastFeaturedDay string
	rng             = rand.New(rand.NewSource(time.Now().UnixNano()))
)

// Handler is the entry point for Vercel
func Handler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json")

	// Load database.json if not already loaded
	if len(tools) == 0 {
		data, err := os.ReadFile("design-index/app/database.json")
		if err != nil {
			http.Error(w, `{"error":"failed to read database.json"}`, http.StatusInternalServerError)
			return
		}
		if err := json.Unmarshal(data, &tools); err != nil {
			http.Error(w, `{"error":"failed to parse database.json"}`, http.StatusInternalServerError)
			return
		}
	}

	today := time.Now().Format("2006-01-02")

	// Serve cached tool if it's still today's pick
	if cachedTool != nil && lastFeaturedDay == today {
		json.NewEncoder(w).Encode(cachedTool)
		return
	}

	if len(tools) == 0 {
		http.Error(w, `{"error":"no tools found"}`, http.StatusInternalServerError)
		return
	}

	randomIndex := rng.Intn(len(tools))
	selected := tools[randomIndex]

	cachedTool = &selected
	lastFeaturedDay = today

	json.NewEncoder(w).Encode(cachedTool)
}
