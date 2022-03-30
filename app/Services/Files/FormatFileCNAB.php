<?php

namespace App\Services\Files;

use Illuminate\Support\Facades\Storage;
use App\Services\Files\Interfaces\FormatFileInteface;

class FormatFileCNAB implements FormatFileInteface
{

    public function formatFileByPath($sotragePath)
    {
        $array = explode(PHP_EOL, Storage::get($sotragePath));

        $arrayResult = [];
        $pattern = "(([0-9])+([*])+([0-9])+)";

        foreach ($array as $key => $value) {
            $arrayResult[$key] = [
                'name' => $this->getFirstGroup($value, $pattern), 
                'code' => $this->getLastGroup($value, $pattern)
            ];
        }
        return 'SUCCESS';
    }

    private function getFirstGroup($value, $pattern) 
    {
        $result = (preg_split($pattern, $value));
        return count($result) > 1 ? trim($result[1]) : null;
    }

    private function getLastGroup($value, $pattern) 
    {
        preg_match($pattern, substr($value,0), $matches, PREG_OFFSET_CAPTURE);
        return count($matches) > 1 ? $matches[0][0] : null;
    }
}